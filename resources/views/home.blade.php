@extends('layouts.app')

@section('content')
<div class="wrapper">

    <!-- /#sidebar-wrapper -->
    <nav id="sidebar">
        <div class="sidebar-header">
            <h3>Dashboard</h3>
        </div>
        
        <ul class="list-unstyled">
          <li>
              <a href="#"> Add New Customer</a>
          </li>
          <li>
              <a href="#"> All Customers</a>
          </li>
          <li>
			<a href="{{ route('logout') }}" onclick="event.preventDefault();
            document.getElementById('logout-form').submit();"> Logout</a>
            <form id="logout-form" action="{{ route('logout') }}" method="POST" style="display: none;">
                @csrf
            </form>
          </li>
      </ul>
    </nav>

    <!-- Page Content -->
    <div id="page-content-wrapper">
      <nav class="navbar navbar-light bg-light mt-4 border-bottom border-secondary">
        <div class="navbar-brand">Title</div>
        <div>
            <input class="form-control mr-sm-2" id="searchTerm" placeholder="Search...">
        </div>
      </nav>

      <div class="container-fluid pt-4">
        
      </div>
    </div>
    <!-- /#page-content-wrapper -->

  </div>
@endsection
