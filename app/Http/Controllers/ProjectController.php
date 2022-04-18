<?php

namespace App\Http\Controllers;

use App\Models\Project;
use Illuminate\Http\Request;

class ProjectController extends Controller
{
    public function show()
    {
        return view('show');
    }

    public function create()
    {
        return view('projects.create', [
            'projects' => Project::all(),
        ]);
    }

    public function store()
    {
        $this->validate(request(), [
            'name' => 'required',
            'description' => 'required',
        ]);

        Project::forceCreate([
            'name' => request('name'),
            'description'=>request('description')
        ]);

        return ['message' => 'Project Created!'];
    }
}
