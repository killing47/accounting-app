<?php

namespace App\Services;

use App\Models\Budget;

class BudgetService
{
    protected $budget;

    public function __construct(Budget $budget)
    {
        $this->budget = $budget;
    }

    public function show($id)
    {
        return $this->budget->find($id);
    }

    public function store($request)
    {
        $inputs = $request->all();
        $this->budget->fill($inputs)->save();
    }

    public function update($request, $id)
    {
        $inputs = $request->all();
        $this->budget->find($id)->fill($inputs)->save();
    }

    public function getListToDate($date)
    {
        return $this->budget->where('confirm_billing_date', 'like', '%' . $date . '%')
                            ->get();
    }

    public function getListToData($date, $label)
    {
        if($label === 'IndexClaim') {
            return $this->budget->where('confirm_billing_date', 'like', '%' . $date . '%')
                                ->where('issue_checkbox', 1)
                                ->get();
        }

        if($label === 'IndexUnClaim') {
            return $this->budget->where('confirm_billing_date', 'like', '%' . $date . '%')
                                ->where('claim_checkbox', 1)
                                ->get();
        }
    }

    public function getProjectList()
    {
        return $this->budget->all()->pluck('project_name');
    }

    public function getCustomerNameList()
    {
        return $this->budget->all()->pluck('customer_name');
    }

    public function getProjectStaffList()
    {
        return $this->budget->all()->pluck('staff');
    }

    public function searchList($request)
    {
        $inputs = $request->all();
        $budget = $this->budget;

        if($inputs['selected'] === 'yet_issue' ) {
            $budget->where('display_checkbox', '0');
        }

        if($inputs['selected'] === 'done_issue_yet_claim' ) {
            $budget->where('issue_checkbox', '1')->where('claim_checkbox', '0');
        }

        if($inputs['selected'] === 'done_yet_claim' ) {
            $budget->where('claim_checkbox', '1');
        }

        if($inputs['selected'] === 'hidden_display') {
            $budget->where('display_checkbox', '1');
        }

        if(isset($inputs['project'])){
            $budget->where('project_name', $inputs['project']);
        }

        if(isset($inputs['customerName'])){
            $budget->where('customer_name', $inputs['customerName']);
        }

        if(isset($inputs['projectStaff'])){
            $budget->where('staff', $inputs['projectStaff']);
        }

        return $budget->get();
    }

}
