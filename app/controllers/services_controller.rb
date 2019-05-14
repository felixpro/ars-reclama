class ServicesController < ApplicationController
  include ActionController::MimeResponds

  before_action :set_service, only: [:show, :edit, :update, :destroy]

  # GET /services
  # GET /services.json
  def index
    @services = Service.all
  end

  # GET /services/1
  # GET /services/1.json
  def show
  end

  # GET /services/new
  def new
    @service = Service.new
  end

  # GET /services/1/edit
  def edit
    @customer = Customer.find params[:id]

    @service = @customer.services.find(params[:id])
  end

  # POST /services
  # POST /services.json
  def create
    @customer = Customer.find(params[:customer_id])
    @service = @customer.service.new(service_params)

    respond_to do |format|
      if @service.save
        format.html { redirect_to @customer, alert: 'Service was successfully created.' }
        format.json { render :show, status: :created, location: @service }
      else
        format.html { render :new }
        format.json { render json: @service.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /services/1
  # PATCH/PUT /services/1.json
  def update
    @service = Service.find(params[:id])

    respond_to do |format|
      if @service.update(service_params)
        format.html { redirect_to @service, notice: 'Service was successfully updated.' }
        format.json { render :show, status: :ok, location: @service }
      else
        format.html { render :edit }
        format.json { render json: @service.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /services/1
  # DELETE /services/1.json
  def destroy
   @service = Service.find(params[:id])
   customer = @service.customer
   @service.destroy
   redirect_to customer

  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_service
      @service = Service.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def service_params
      params.require(:service).permit(:customer_id, :process, :code, :reclaimed, :authorized, :difference)
    end
end
