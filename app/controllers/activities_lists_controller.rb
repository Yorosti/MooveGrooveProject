class ActivitiesListsController < ApplicationController
  before_action :set_activities_list, only: [:show, :edit, :update, :destroy]

  # GET /activities_lists
  # GET /activities_lists.json
  def index
    @activities_lists = ActivitiesList.all
  end

  # GET /activities_lists/1
  # GET /activities_lists/1.json
  def show
  end

  # GET /activities_lists/new
  def new
    @activities_list = ActivitiesList.new
  end

  # GET /activities_lists/1/edit
  def edit
  end

  # POST /activities_lists
  # POST /activities_lists.json
  def create
    @activities_list = ActivitiesList.new(activities_list_params)

    respond_to do |format|
      if @activities_list.save
        format.html { redirect_to @activities_list, notice: 'Activities list was successfully created.' }
        format.json { render :show, status: :created, location: @activities_list }
      else
        format.html { render :new }
        format.json { render json: @activities_list.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /activities_lists/1
  # PATCH/PUT /activities_lists/1.json
  def update
    respond_to do |format|
      if @activities_list.update(activities_list_params)
        format.html { redirect_to @activities_list, notice: 'Activities list was successfully updated.' }
        format.json { render :show, status: :ok, location: @activities_list }
      else
        format.html { render :edit }
        format.json { render json: @activities_list.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /activities_lists/1
  # DELETE /activities_lists/1.json
  def destroy
    @activities_list.destroy
    respond_to do |format|
      format.html { redirect_to activities_lists_url, notice: 'Activities list was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_activities_list
      @activities_list = ActivitiesList.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def activities_list_params
      params.fetch(:activities_list, {}).permit(:name, :category, :imagePath)
    end
end
