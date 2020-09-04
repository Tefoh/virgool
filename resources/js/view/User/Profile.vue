<template>
    <v-container v-if="user">
        <v-row align="center" justify="center" class="d-flex flex-column">
            <v-col col="12" md="8">
                <v-form ref="form">
                    <div class="d-flex flex-row">
                        <v-avatar size="80px">
                            <v-img :src="user.profile_src || '/images/avatar.png'"
                                   @click="$refs.profile.click()"
                            ></v-img>
                            <input type="file"
                                   style="display: none;"
                                   ref="profile"
                                   @change="uploadProfile"
                            >
                        </v-avatar>
                        <div class="d-flex flex-column mr-5 w-100">
                            <v-text-field placeholder="نام"
                                          v-model="user.name"
                                          :rules="[
                                              required('فیلد نام الزامیست')
                                          ]"
                            ></v-text-field>
                            <v-textarea placeholder="بیوگرافی"
                                        v-model="user.bio"
                            ></v-textarea>
                        </div>
                    </div>
                    <v-divider class="my-12"></v-divider>
                    <div>
                        <h2>تنظیمات حساب کاربری</h2>
                        <div class="mt-5 d-flex flex-row">
                            <div class="d-flex flex-column">
                                <span class="title">نام کاربری</span>
                                <div class="d-flex flex-row">
                                    <v-btn text
                                           rounded
                                           outlined
                                           small
                                           class="mt-3 ml-3"
                                           :class="{ 'success': editing.username }"
                                           @click="changeEdit('username')"
                                    >
                                        {{ editing.username ? 'ثبت' : 'ویرایش' }}
                                    </v-btn>
                                    <v-btn text
                                           rounded
                                           outlined
                                           small
                                           class="mt-3"
                                           @click="cancel('username')"
                                           v-show="editing.username"
                                    >
                                        منصرف شدن
                                    </v-btn>
                                </div>
                            </div>
                            <v-spacer></v-spacer>
                            <template v-if="! editing.username">
                                <span class="mt-4">{{ fullUsername }}</span>
                            </template>
                            <template v-else>
                                <v-text-field :prefix="url"
                                              v-model="user.username"
                                              class="ltr"
                                              :rules="[
                                                  required('فیلد نام کاربری الزامیست'),
                                                  verifyUsername()
                                              ]"
                                              :error-messages="errors.username"
                                ></v-text-field>
                            </template>
                        </div>
                        <v-divider class="mt-5"></v-divider>

                        <div class="mt-5 d-flex flex-row">
                            <div class="d-flex flex-column">
                                <span class="title">ایمیل</span>
                                <div class="d-flex flex-row">
                                    <v-btn text
                                           rounded
                                           outlined
                                           small
                                           class="mt-3 ml-3"
                                           :class="{ 'success': editing.email }"
                                           @click="changeEdit('email')"
                                    >
                                        {{ editing.email ? 'ثبت' : 'ویرایش' }}
                                    </v-btn>
                                    <v-btn text
                                           rounded
                                           outlined
                                           small
                                           class="mt-3"
                                           @click="cancel('email')"
                                           v-show="editing.email"
                                    >
                                        منصرف شدن
                                    </v-btn>
                                </div>
                            </div>
                            <v-spacer></v-spacer>
                            <template v-if="! editing.email">
                                <span class="mt-4">{{ user.email }}</span>
                            </template>
                            <template v-else>
                                <v-text-field v-model="user.email"
                                              class="ltr"
                                              placeholder="ایمیل"
                                              :rules="[
                                                  required('فیلد ایمیل الزامیست'),
                                                  verifyEmail()
                                              ]"
                                              :error-messages="errors.email"
                                ></v-text-field>
                            </template>
                        </div>
                        <v-divider class="mt-5"></v-divider>
                        <div class="mt-5 d-flex flex-row">
                            <div class="d-flex flex-column">
                                <span class="title">تغییر رمز عبور</span>
                            </div>
                            <v-spacer></v-spacer>
                            <v-text-field v-model="user.password"
                                          class="ltr"
                                          placeholder="رمز عبور"
                                          outlined
                                          :rules="[
                                              moreThan(8, 'رمز عبور', true)
                                          ]"
                            ></v-text-field>
                        </div>
                        <v-divider class="mt-5"></v-divider>
                        <div class="mt-5 d-flex flex-row">
                            <span class="title mt-4">ارسال ایمیل هنگام دنبال کردن</span>
                            <v-spacer></v-spacer>
                            <v-switch inset v-model="user.email_on_follow"></v-switch>
                        </div>
                        <v-divider class="mt-5"></v-divider>
                        <div class="mt-5 d-flex flex-row">
                            <span class="title mt-4">ارسال ایمیل هنگام لایک کردن</span>
                            <v-spacer></v-spacer>
                            <v-switch inset v-model="user.email_on_like"></v-switch>
                        </div>
                        <v-divider class="mt-5"></v-divider>
                        <div class="mt-5 d-flex flex-row">
                            <span class="title mt-4">ارسال ایمیل هنگام جواب کردن</span>
                            <v-spacer></v-spacer>
                            <v-switch inset v-model="user.email_on_reply"></v-switch>
                        </div>
                        <div class="d-flex flex-row">
                            <v-spacer></v-spacer>
                            <v-btn rounded
                                   text
                                   outlined
                                   @click="update"
                            >
                                ذخیره پروفایل
                            </v-btn>
                        </div>
                    </div>
                </v-form>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>
    import profileModule from "@/module/user/profileModule";
    import { required, verifyEmail, moreThan, verifyUsername } from "@/rules"
    export default {
        name: "Profile",
        metaInfo: {
            title: 'پروفایل من -',
        },
        setup() {
            return {
                ...profileModule(),
                required, verifyEmail, moreThan, verifyUsername
            }
        }
    }
</script>

<style scoped>

</style>
