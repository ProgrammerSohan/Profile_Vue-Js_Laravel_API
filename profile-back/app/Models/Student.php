<?php

namespace App\Models;

use App\Models\Course;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Student extends Model
{
    use HasFactory;
    public $table = "students";
    protected $fillable = [
        'name',
        'lastname',
        'photo',
        'id'
    ];
    public function courses(){
        return $this->belongsToMany(Course::class,"course_student");
    }
}
