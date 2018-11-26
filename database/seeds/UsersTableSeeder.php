<?php

use Illuminate\Database\Seeder;

class UsersTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        factory(App\User::class, 4)->create();

        App\User::create([
            'name'              => 'Marcelo Nogueira',
            'email'             => 'marcelo@app.com',
            'password'          => bcrypt('123456'),
            'type'              => 1,
            'cpf'               => '123.456.789-11',
            'email_verified_at' => now(),
            'access'            => true
        ]);
    }
}
