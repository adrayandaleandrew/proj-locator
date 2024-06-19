<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Models\User; // Import your User model if not already imported
use Illuminate\Support\Facades\Hash; // Import Hash facade if not already imported

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        // Example of creating a user using the User model
        User::create([
            'name' => 'admin account',
            'email' => 'admin-test@mailnesia.com',
            'password' => Hash::make('Passw0rd!'), // Hashing the password
        ]);

        // You can add more users as needed
    }
}