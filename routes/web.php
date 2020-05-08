<?php

/*
|--------------------------------------------------------------------------
| Web Routes
|--------------------------------------------------------------------------
|
| Here is where you can register web routes for your application. These
| routes are loaded by the RouteServiceProvider within a group which
| contains the "web" middleware group. Now create something great!
|
*/

Route::get('/', function () {
    return redirect('/login');
});

Auth::routes();
Route::get('/home', 'HomeController@index')->name('home');

Route::get('/budget/{id}', 'BudgetController@show');
Route::get('/budget/date/{date}', 'BudgetController@index');
Route::get('/budget/data/{data}/{label}', 'BudgetController@indexToData');


Route::get('/budget/project/list', 'BudgetController@projectList');
Route::get('/budget/customer/name_list', 'BudgetController@customerNameList');
Route::get('/budget/project/staff_list', 'BudgetController@projectStaffList');
Route::get('/budget/search/list', 'BudgetController@search');

Route::post('/budget', 'BudgetController@store');
Route::post('/budget/update/{id}', 'BudgetController@update');