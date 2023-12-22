<?php

namespace App\Models;

use App\Models\Student;
use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Course extends Model
{
    use HasFactory;
    public $table = "courses";
    protected $fillable = ["*"];
    public function students(){
        return $this->belongsToMany(Student::class,"course_student");
    }
}
