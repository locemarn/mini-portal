<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use App\Post;
use App\User;

class HomeController extends Controller
{
    /**
     * Create a new controller instance.
     *
     * @return void
     */
    public function __construct()
    {
        $this->middleware('auth');
    }

    /**
     * Show the application dashboard.
     *
     * @return \Illuminate\Http\Response
     */
    public function index()
    {
        $id = Auth::id();

        $user = User::find($id);
        
        if (!$user->access) {
            Auth::logout();
            return view('posts');
        }

        // echo $user->type;exit();

        if ($user->type === 1) {
            $posts = Post::select('posts.*', 'users.name')
                ->join('users', 'posts.user_id', 'users.id')
                ->orderBy('id', 'DESC')
                ->paginate(10);
        } else {   
            $posts = Post::select('posts.*', 'users.name')
                ->join('users', 'posts.user_id', 'users.id')
                ->where('user_id', $id)
                ->orderBy('id', 'DESC')
                ->paginate(5);
        }

        return view('home', compact('posts'));
    }

    public function destroy($id)
    {
        $post = Post::find($id);

        $post->delete();

        return view('/home')->with('message', 'Post excluded with successfully.');
    }
}
