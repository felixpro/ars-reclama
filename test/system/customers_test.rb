require "application_system_test_case"

class CustomersTest < ApplicationSystemTestCase
  setup do
    @customer = customers(:one)
  end

  test "visiting the index" do
    visit customers_url
    assert_selector "h1", text: "Customers"
  end

  test "creating a Customer" do
    visit customers_url
    click_on "New Customer"

    fill_in "Adress", with: @customer.adress
    fill_in "Affiliate number", with: @customer.affiliate_number
    fill_in "Age", with: @customer.age
    fill_in "Autorization number", with: @customer.autorization_number
    fill_in "Cell", with: @customer.cell
    fill_in "City", with: @customer.city
    fill_in "Doc", with: @customer.doc
    check "Doc type" if @customer.doc_type
    fill_in "Email", with: @customer.email
    check "Gender" if @customer.gender
    fill_in "Img", with: @customer.img
    fill_in "Name", with: @customer.name
    fill_in "Phone", with: @customer.phone
    fill_in "Sector", with: @customer.sector
    fill_in "Therapies", with: @customer.therapies
    click_on "Create Customer"

    assert_text "Customer was successfully created"
    click_on "Back"
  end

  test "updating a Customer" do
    visit customers_url
    click_on "Edit", match: :first

    fill_in "Adress", with: @customer.adress
    fill_in "Affiliate number", with: @customer.affiliate_number
    fill_in "Age", with: @customer.age
    fill_in "Autorization number", with: @customer.autorization_number
    fill_in "Cell", with: @customer.cell
    fill_in "City", with: @customer.city
    fill_in "Doc", with: @customer.doc
    check "Doc type" if @customer.doc_type
    fill_in "Email", with: @customer.email
    check "Gender" if @customer.gender
    fill_in "Img", with: @customer.img
    fill_in "Name", with: @customer.name
    fill_in "Phone", with: @customer.phone
    fill_in "Sector", with: @customer.sector
    fill_in "Therapies", with: @customer.therapies
    click_on "Update Customer"

    assert_text "Customer was successfully updated"
    click_on "Back"
  end

  test "destroying a Customer" do
    visit customers_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Customer was successfully destroyed"
  end
end
