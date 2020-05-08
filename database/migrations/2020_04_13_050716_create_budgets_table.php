<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

class CreateBudgetsTable extends Migration
{
    /**
     * Run the migrations.
     *
     * @return void
     */
    public function up()
    {
        Schema::create('budgets', function (Blueprint $table) {
            $table->increments('id');
            $table->string('claim_number')->nullable();
            $table->string('consignment_company')->nullable();
            $table->string('confirm_item')->nullable();
            $table->string('confirm_billing_date')->nullable();
            $table->string('confirm_price')->nullable();
            $table->string('confirm_quantity')->nullable();
            $table->string('confirm_total_price')->nullable();
            $table->string('confirm_unit')->nullable();
            $table->string('confirm_unit_price')->nullable();
            $table->string('customer_name')->nullable();
            $table->string('delivery_date')->nullable();
            $table->string('delivery_place')->nullable();
            $table->string('item')->nullable();
            $table->string('item_deteils')->nullable();
            $table->string('order_date')->nullable();
            $table->string('project_name')->nullable();
            $table->string('project_staff')->nullable();
            $table->string('project_title')->nullable();
            $table->string('purchasing_price')->nullable();
            $table->string('purchasing_unit')->nullable();
            $table->string('quantity')->nullable();
            $table->string('sales_date')->nullable();
            $table->string('sales_unit')->nullable();
            $table->string('sales_price')->nullable();
            $table->string('slip_number')->nullable();
            $table->string('staff')->nullable();
            $table->boolean('claim_checkbox')->nullable();
            $table->boolean('display_checkbox')->nullable();
            $table->boolean('issue_checkbox')->nullable();
            $table->timestamps();
            $table->softDeletes();
        });
    }

    /**
     * Reverse the migrations.
     *
     * @return void
     */
    public function down()
    {
        Schema::dropIfExists('budgets');
    }
}
