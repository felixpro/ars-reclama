require 'test_helper'

class HistorialsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @historial = historials(:one)
  end

  test "should get index" do
    get historials_url
    assert_response :success
  end

  test "should get new" do
    get new_historial_url
    assert_response :success
  end

  test "should create historial" do
    assert_difference('Historial.count') do
      post historials_url, params: { historial: { anexo: @historial.anexo, autorizar: @historial.autorizar, customer_id: @historial.customer_id, examen: @historial.examen, familiares: @historial.familiares, firma: @historial.firma, padecimiento: @historial.padecimiento, patologico: @historial.patologico, status: @historial.status, unificada: @historial.unificada } }
    end

    assert_redirected_to historial_url(Historial.last)
  end

  test "should show historial" do
    get historial_url(@historial)
    assert_response :success
  end

  test "should get edit" do
    get edit_historial_url(@historial)
    assert_response :success
  end

  test "should update historial" do
    patch historial_url(@historial), params: { historial: { anexo: @historial.anexo, autorizar: @historial.autorizar, customer_id: @historial.customer_id, examen: @historial.examen, familiares: @historial.familiares, firma: @historial.firma, padecimiento: @historial.padecimiento, patologico: @historial.patologico, status: @historial.status, unificada: @historial.unificada } }
    assert_redirected_to historial_url(@historial)
  end

  test "should destroy historial" do
    assert_difference('Historial.count', -1) do
      delete historial_url(@historial)
    end

    assert_redirected_to historials_url
  end
end
