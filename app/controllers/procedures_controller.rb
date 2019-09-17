class ProceduresController < ApplicationController
  before_action :set_procedure, only: [:show, :edit, :update, :destroy]

  # GET /procedures
  # GET /procedures.json
  def index
    @procedures = Procedure.all
  end

  # GET /procedures/1
  # GET /procedures/1.json
  def show
  end

  # GET /procedures/new
  def new
    @procedure = Procedure.new
  end

  # GET /procedures/1/edit
  def edit
  end

  # POST /procedures
  # POST /procedures.json
  def create
    @customer = Customer.find(params[:customer_id])
    @procedure = @customer.procedure.new(procedure_params)

    respond_to do |format|
      if @procedure.save
        format.html { redirect_to @customer}
        format.json { render :show, status: :created, location: @procedure }
      else
        format.html { render :new }
        format.json { render json: @procedure.errors, status: :unprocessable_entity }
      end
    end
  end


  # PATCH/PUT /procedures/1
  # PATCH/PUT /procedures/1.json
  def update
    respond_to do |format|
      if @procedure.update(procedure_params)
        format.html { redirect_to @procedure, notice: 'Procedure was successfully updated.' }
        format.json { render :show, status: :ok, location: @procedure }
      else
        format.html { render :edit }
        format.json { render json: @procedure.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /procedures/1
  # DELETE /procedures/1.json
  def destroy
    @procedure = Procedure.find(params[:id])
    @customer = Customer.find(params[:customer_id])

    @procedure.destroy
    respond_to do |format|
      format.js {render inline: "location.reload();" }

    end
  end

  private
    # Use callbacks to share common setup or constraints between actions.
    def set_procedure
      @procedure = Procedure.find(params[:id])
    end

    # Never trust parameters from the scary internet, only allow the white list through.
    def procedure_params
      params.require(:procedure).permit(:customer_id, :conclusion, :description, :plan)
    end
end
