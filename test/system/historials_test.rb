require "application_system_test_case"

class HistorialsTest < ApplicationSystemTestCase
  setup do
    @historial = historials(:one)
  end

  test "visiting the index" do
    visit historials_url
    assert_selector "h1", text: "Historials"
  end

  test "creating a Historial" do
    visit historials_url
    click_on "New Historial"

    fill_in "Anexo", with: @historial.anexo
    fill_in "Autorizar", with: @historial.autorizar
    fill_in "Customer", with: @historial.customer_id
    fill_in "Examen", with: @historial.examen
    fill_in "Familiares", with: @historial.familiares
    fill_in "Firma", with: @historial.firma
    fill_in "Padecimiento", with: @historial.padecimiento
    fill_in "Patologico", with: @historial.patologico
    fill_in "Status", with: @historial.status
    fill_in "Unificada", with: @historial.unificada
    click_on "Create Historial"

    assert_text "Historial was successfully created"
    click_on "Back"
  end

  test "updating a Historial" do
    visit historials_url
    click_on "Edit", match: :first

    fill_in "Anexo", with: @historial.anexo
    fill_in "Autorizar", with: @historial.autorizar
    fill_in "Customer", with: @historial.customer_id
    fill_in "Examen", with: @historial.examen
    fill_in "Familiares", with: @historial.familiares
    fill_in "Firma", with: @historial.firma
    fill_in "Padecimiento", with: @historial.padecimiento
    fill_in "Patologico", with: @historial.patologico
    fill_in "Status", with: @historial.status
    fill_in "Unificada", with: @historial.unificada
    click_on "Update Historial"

    assert_text "Historial was successfully updated"
    click_on "Back"
  end

  test "destroying a Historial" do
    visit historials_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Historial was successfully destroyed"
  end
end
