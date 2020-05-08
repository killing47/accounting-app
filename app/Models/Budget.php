<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Database\Eloquent\SoftDeletes;

class Budget extends Model
{
    use SoftDeletes;

    protected $fillable = [
        'claim_checkbox',
        'claim_number',
        'consigment_company',
        'confirm_item',
        'confirm_billing_date',
        'confirm_price',
        'confirm_quantity',
        'confirm_total_price',
        'confirm_unit',
        'confirm_unit_price',
        'customer_name',
        'delivery_date',
        'delivery_place',
        'display_checkbox',
        'issue_checkbox',
        'item',
        'item_details',
        'order_date',
        'project_name',
        'project_staff',
        'project_title',
        'purchasing_price',
        'purchasing_unit',
        'quantity',
        'sales_date',
        'sales_price',
        'sales_unit',
        'slip_number',
        'staff',
    ];

    protected $dates = [
        'order_date', 'delivery_date', 'sales_date',
    ];
}
