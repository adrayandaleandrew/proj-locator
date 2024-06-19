<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Models\User;

class ApiController extends Controller
{
    // Other methods like getUsers and getUser as before...

    public function login(Request $request)
    {
        $credentials = $request->only('loginEmail', 'loginPassword');

        if (Auth::attempt($credentials)) {
            // Authentication passed...
            $user = Auth::user();
            return response()->json(['user' => $user]);
        } else {
            return response()->json(['error' => 'Unauthorized'], 401);
        }
    }
}
