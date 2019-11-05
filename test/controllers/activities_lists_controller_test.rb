require 'test_helper'

class ActivitiesListsControllerTest < ActionDispatch::IntegrationTest
  setup do
    @activities_list = activities_lists(:one)
  end

  test "should get index" do
    get activities_lists_url
    assert_response :success
  end

  test "should get new" do
    get new_activities_list_url
    assert_response :success
  end

  test "should create activities_list" do
    assert_difference('ActivitiesList.count') do
      post activities_lists_url, params: { activities_list: {  } }
    end

    assert_redirected_to activities_list_url(ActivitiesList.last)
  end

  test "should show activities_list" do
    get activities_list_url(@activities_list)
    assert_response :success
  end

  test "should get edit" do
    get edit_activities_list_url(@activities_list)
    assert_response :success
  end

  test "should update activities_list" do
    patch activities_list_url(@activities_list), params: { activities_list: {  } }
    assert_redirected_to activities_list_url(@activities_list)
  end

  test "should destroy activities_list" do
    assert_difference('ActivitiesList.count', -1) do
      delete activities_list_url(@activities_list)
    end

    assert_redirected_to activities_lists_url
  end
end
