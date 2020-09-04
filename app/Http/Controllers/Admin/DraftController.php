<?php

namespace App\Http\Controllers\Admin;

use App\Draft;
use App\Http\Controllers\Controller;
use Illuminate\Http\Request;

class DraftController extends Controller
{
    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index(Request $request)
    {
        return response([
            'items' => Draft::with('user')
                        ->sortFromRequest()
                        ->searchInFields()
                        ->paginate($request->per_page ?? 10),
            'headers' => Draft::getHeaderFields()
        ], 200);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy(Request $request)
    {
        $request->validate(['items' => 'required', 'items.*' => 'required']);

        Draft::destroy($request->items);

        return  response([
            'data' => 'ok'
        ], 200);
    }
}
