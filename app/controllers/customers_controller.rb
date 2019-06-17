class CustomersController < ApplicationController
  include ActionController::MimeResponds
  before_action :set_customer, only: [:show, :edit, :update, :destroy]

  def ars
    @customer = Customer.new
  end
  def cenasa
    @customer = Customer.new
  end
  def naseguro
    @customer = Customer.new
  end

  # GET /customers
  # GET /customers.json
  def index
    @customers = Customer.all
  end

  # GET /customers/1
  # GET /customers/1.json
  def show
    @customer = Customer.find(params[:id])
    @service = @customer.service.order('created_at DESC').limit(4)
    @reclamation = @customer.reclamation.order('created_at DESC');
    @identifier = 0;

  end

  # GET /customers/new
  def new
    @customer = Customer.new
  end

  # GET /customers/1/edit
  def edit
    @customer = Customer.find(params[:id])

  end

  # POST /customers
  # POST /customers.json
  def create
    @customer = Customer.new(customer_params)

    respond_to do |format|
      if @customer.save
        format.html { redirect_to @customer, notice: 'Customer was successfully created.' }
        format.json { render :show, status: :created, location: @customer }
      else
        format.html { render :new }
        format.json { render json: @customer.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /customers/1
  # PATCH/PUT /customers/1.json
  def update
    @customer = Customer.find(params[:id])
    respond_to do |format|
       if @customer.update(customer_params)
         format.html { redirect_to customer_url, notice: 'Order updated.' }
         format.json { head :no_content }
       else
         format.html { render action: 'edit' }
         format.json { render json: @customer.errors, status: :unprocessable_entity }
      end
    end
  end
  # DELETE /customers/1
  # DELETE /customers/1.json
  def destroy
    @customer.destroy
    respond_to do |format|
      format.html { redirect_to customers_url, notice: 'Customer was successfully destroyed.' }
      format.json { head :no_content }
    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_customer
      @customer = Customer.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def customer_params
      params.require(:customer).permit(:name, :phone, :cell, :email, :affiliate_number, :img, :age, :doc, :sector, :city, :gender, :doc_type, :autorization_number, :therapies, :adress, :insurance, :contractNum, :diagnostic)
    end
end
