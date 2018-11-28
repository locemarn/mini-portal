@extends('layouts.app')

@section('content')
<div class="container">
    @foreach($posts as $post)
    <div class="card border-dark mb-3">
        <div class="card-header bg-transparent border-dark"><h5 class="card-title">{{$post->title}}</h5></div>
        <div class="card-body text-dark">
            
            <p class="card-text">{{$post->description}}</p>
        </div>
        <div class="card-footer bg-transparent border-dark" style="display: flex; justify-content:space-between; align-items: center;">
            <div>
                <a href="#" class='btn  btn-danger'>Delete</a>
            </div>
            <div class="text-right">Created at: {{$post->created_at}}</div>
            <div>
                <p>Posted by: <strong>{{$post->name}}</strong></p>
            </div>
        </div>
    </div>
    @endforeach
</div>

{{ $posts->links() }}
@endsection
