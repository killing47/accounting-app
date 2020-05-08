<?php

namespace App\Http\Controllers;

use Illuminate\Http\Request;
use App\Services\BudgetService;

class BudgetController extends Controller
{
    public function __construct(BudgetService $budgetService)
    {
        $this->middleware('auth');
        $this->budgetService = $budgetService;
    }

    /**
     * Display a listing of the resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function index($date)
    {
        return $this->budgetService->getListToDate($date);
    }

    public function indexToData($date, $label)
    {
        return $this->budgetService->getListToData($date, $label);
    }

    /**
     * Show the form for creating a new resource.
     *
     * @return \Illuminate\Http\Response
     */
    public function create()
    {
        //
    }

    /**
     * Store a newly created resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @return \Illuminate\Http\Response
     */
    public function store(Request $request)
    {
        $this->budgetService->store($request);
    }

    /**
     * Display the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function show($id)
    {
        return $this->budgetService->show($id);
    }

    /**
     * Show the form for editing the specified resource.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function edit($id)
    {
        //
    }

    /**
     * Update the specified resource in storage.
     *
     * @param  \Illuminate\Http\Request  $request
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function update(Request $request, $id)
    {
        $this->budgetService->update($request, $id);
    }

    /**
     * Remove the specified resource from storage.
     *
     * @param  int  $id
     * @return \Illuminate\Http\Response
     */
    public function destroy($id)
    {
        //
    }

    public function projectList()
    {
        return $this->budgetService->getProjectList();
    }

    public function customerNameList()
    {
        return $this->budgetService->getCustomerNameList();
    }

    public function projectStaffList()
    {
        return $this->budgetService->getProjectStaffList();
    }

    public function search(Request $request)
    {
        return $this->budgetService->searchList($request);
    }
}
