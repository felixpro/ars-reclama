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
    @customers = if params[:term]
         Customer.where('name LIKE ?', "%#{params[:term]}%")
       else
         Customer.all
       end
    @customerNew = Customer.new
    @reclamations = Reclamation.all
    ######### month
    @monthCustomer      = @customers.where('created_at >= ?', 1.month.ago).count
    @monthreclamations  = @reclamations.where('created_at >= ?', 1.month.ago).count
    @reclam_month       = @reclamations.where('created_at >= ?', 1.month.ago)
    @month_therapies    = 0;
    @reclam_month .each do |reclamation|
      reclamation.therapiesNum.to_i.times do | num |
        @month_therapies  = @month_therapies  + 1;
      end
    end

    ######### week
    @weekCustomer      = @customers.where('created_at >= ?', 1.week.ago).count
    @weekreclamations  = @reclamations.where('created_at >= ?', 1.week.ago).count
    @reclam_week       = @reclamations.where('created_at >= ?', 1.week.ago)
    @week_therapies    = 0;
    @reclam_week.each do |reclamation|
      reclamation.therapiesNum.to_i.times do | num |
        @week_therapies = @week_therapies + 1;
      end
    end
    ######### year
    @yearCustomer      = @customers.where('created_at >= ?', 1.year.ago).count
    @yearreclamations  = @reclamations.where('created_at >= ?', 1.year.ago).count
    @reclam_year      = @reclamations.where('created_at >= ?', 1.year.ago)
    @year_therapies    = 0;
    @reclam_year.each do |reclamation|
      reclamation.therapiesNum.to_i.times do | num |
        @year_therapies = @year_therapies + 1;
      end
    end

  end

  # GET /customers/1
  # GET /customers/1.json
  def show
    @customer = Customer.find(params[:id])
    @service = @customer.service.order('created_at DESC').limit(4)
    @reclamation = @customer.reclamation.order('created_at DESC');
    @identifier = 0;
    @therapiequantity = 0;

     @reclamation.each do |reclamation|
      reclamation.therapiesNum.to_i.times do | num |
        @therapiequantity = @therapiequantity + 1;
      end
     end

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
    @customer.image.attach(params[:customer][:image])


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
         format.html { redirect_to @customer }
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
      params.permit(:name, :phone, :cell, :email, :affiliate_number, :img, :age, :doc, :sector, :city, :gender, :doc_type, :autorization_number, :therapies, :adress, :insurance, :contractNum, :diagnostic, :term)
    end
end
