require "application_system_test_case"

class ActivitiesListsTest < ApplicationSystemTestCase
  setup do
    @activities_list = activities_lists(:one)
  end

  test "visiting the index" do
    visit activities_lists_url
    assert_selector "h1", text: "Activities Lists"
  end

  test "creating a Activities list" do
    visit activities_lists_url
    click_on "New Activities List"

    click_on "Create Activities list"

    assert_text "Activities list was successfully created"
    click_on "Back"
  end

  test "updating a Activities list" do
    visit activities_lists_url
    click_on "Edit", match: :first

    click_on "Update Activities list"

    assert_text "Activities list was successfully updated"
    click_on "Back"
  end

  test "destroying a Activities list" do
    visit activities_lists_url
    page.accept_confirm do
      click_on "Destroy", match: :first
    end

    assert_text "Activities list was successfully destroyed"
  end
end
