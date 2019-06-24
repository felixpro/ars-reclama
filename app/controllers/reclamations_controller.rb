class ReclamationsController < ApplicationController
  include ActionController::MimeResponds
  before_action :set_reclamation, only: [:show, :edit, :update, :destroy]

  # GET /reclamations
  # GET /reclamations.json
  def index
    @reclamations = Reclamation.all
  end

  # GET /reclamations/1
  # GET /reclamations/1.json
  def show
  end

  # GET /reclamations/new
  def new
    @reclamation = Reclamation.new
  end

  # GET /reclamations/1/edit
  def edit
    @customer = Customer.find(params[:id])
    @reclamation = @customer.reclamations.find(params[:id])
  end

  # POST /reclamations
  # POST /reclamations.json
  def create
    @customer = Customer.find(params[:customer_id])
    @reclamation = @customer.reclamation.new(reclamation_params)

    respond_to do |format|
      if @reclamation.save
        format.html { redirect_to @customer, notice: 'Reclamation was successfully created.' }
        format.json { render :show, status: :created, location: @reclamation }
      else
        format.html { render :new }
        format.json { render json: @reclamation.errors, status: :unprocessable_entity }
      end
    end
  end

  # PATCH/PUT /reclamations/1
  # PATCH/PUT /reclamations/1.json
  def update
    @reclamation = Reclamation.find(params[:id])

    respond_to do |format|
      if @reclamation.update(reclamation_params)
        format.html { redirect_to @reclamation, notice: 'Reclamation was successfully updated.' }
        format.json { render :show, status: :ok, location: @reclamation }
      else
        format.html { render :edit }
        format.json { render json: @reclamation.errors, status: :unprocessable_entity }
      end
    end
  end


  def update
    @reclamation = Reclamation.find(params[:id])
    respond_to do |format|
      if @reclamation.update(reclamation_params)
        format.html { redirect_to @reclamation, notice: 'reclamation was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: 'edit'}
        format.json { render json: @reclamation.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /reclamations/1
  # DELETE /reclamations/1.json
  def destroy
   @reclamation = Reclamation.find(params[:id])
   customer = @reclamation.customer
   @reclamation.destroy
   redirect_to customer
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_reclamation
      @reclamation = Reclamation.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def reclamation_params
      params.require(:reclamation).permit(:customer_id, :authNum, :therapiesNum, :doctor, :creationDate, :ensureReclam, :diagnostic)
    end
end
