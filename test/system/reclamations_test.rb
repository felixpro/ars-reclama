require "application_system_test_case"

class ReclamationsTest < ApplicationSystemTestCase
  setup do
    @reclamation = reclamations(:one)
  end

  test "visiting the index" do
    visit reclamations_url
    assert_selector "h1", text: "Reclamations"
  end

  test "creating a Reclamation" do
    visit reclamations_url
    click_on "New Reclamation"

    fill_in "Authnum", with: @reclamation.authNum
    fill_in "Creationdate", with: @reclamation.creationDate
    fill_in "Customer", with: @reclamation.customer_id
    fill_in "Doctor", with: @reclamation.doctor
    fill_in "Therapiesnum", with: @reclamation.therapiesNum
    click_on "Create Reclamation"

    assert_text "Reclamation was successfully created"
    click_on "Back"
  end

  test "updating a Reclamation" do
    visit reclamations_url
    click_on "Edit", match: :first

    fill_in "Authnum", with: @reclamation.authNum
    fill_in "Creationdate", with: @reclamation.creationDate
    fill_in "Customer", with: @reclamation.customer_id
    fill_in "Doctor", with: @reclamation.doctor
    fill_in "Therapiesnum", with: @reclamation.therapiesNum
    click_on "Update Reclamation"

    assert_text "Reclamation was successfully updated"
    click_on "Back"
  end

  test "destroying a Reclamation" do
    visit reclamations_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Reclamation was successfully destroyed"
  end
end
