require 'test_helper'

class ProceduresControllerTest < ActionDispatch::IntegrationTest
  setup do
    @procedure = procedures(:one)
  end

  test "should get index" do
    get procedures_url
    assert_response :success
  end

  test "should get new" do
    get new_procedure_url
    assert_response :success
  end

  test "should create procedure" do
    assert_difference('Procedure.count') do
      post procedures_url, params: { procedure: { conclusion: @procedure.conclusion, customer_id: @procedure.customer_id, description: @procedure.description } }
    end

    assert_redirected_to procedure_url(Procedure.last)
  end

  test "should show procedure" do
    get procedure_url(@procedure)
    assert_response :success
  end

  test "should get edit" do
    get edit_procedure_url(@procedure)
    assert_response :success
  end

  test "should update procedure" do
    patch procedure_url(@procedure), params: { procedure: { conclusion: @procedure.conclusion, customer_id: @procedure.customer_id, description: @procedure.description } }
    assert_redirected_to procedure_url(@procedure)
  end

  test "should destroy procedure" do
    assert_difference('Procedure.count', -1) do
      delete procedure_url(@procedure)
    end

    assert_redirected_to procedures_url
  end
end
