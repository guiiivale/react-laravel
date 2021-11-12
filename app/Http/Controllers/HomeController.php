<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;

class HomeController extends Controller
{
    public function index(){
        $data = ['zap','oi'];
        json_encode($data);
        return view('welcome', compact('data'));
    }
}
