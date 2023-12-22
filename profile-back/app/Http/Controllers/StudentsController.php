<?php

namespace App\Http\Controllers;

use App\Models\Student;
use Illuminate\Http\Request;

class StudentsController extends Controller
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        return Student::all();
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
         $inputs = $request->input();
         $requests = Student::create($inputs);
         return $requests;
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
         $e = Student::find($id);
         if(isset($e)){
            $e->name = $request->name;
            $e->lastname = $request->lastname;
            $e->photo = $request->photo;
            //return $e->save();
            if($e->save()){
                return response()->json([
                    'data'=>$e,
                    'message'=> "successfully updated student",
                ]);
            }else{
                return response()->json([
                    'data'=>$e,
                    'message'=>"student not updated"
                ]);
            }
         }else{
            return response()->json([
                'error'=>true,
                'message'=>"No exist student."
            ]);
         }
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        //
    }
}
