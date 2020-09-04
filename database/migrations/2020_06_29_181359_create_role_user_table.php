<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateRoleUserTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('role_user', function (Blueprint $table) {
            $table->primary(['role_id', 'user_id']);
            $table->foreignId('role_id')
                ->constrained()
                ->onDelete('CASCADE')
                ->onUpdate('CASCADE');

            $table->foreignId('user_id')
                ->constrained()
                ->onDelete('CASCADE')
                ->onUpdate('CASCADE');
        });

        $user = \App\User::first();
        $user = $user->exists() ? $user : factory(\App\User::class)->create(['username' => 'admin']);

        $role = \App\Role::create(['name' => 'admin']);

        $user->roles()->save($role);
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('role_user');
    }
}
