class MemosController < ApplicationController
  before_action :set_memo, only: [:show, :edit, :update, :destroy]

  def index
    @memos = Memo.all
  end

  def show
  end

  def new
    @memo = Memo.new
  end

  def create
    @memo = Memo.new(memo_params)

    respond_to do |format|
      if @memo.save
        format.turbo_stream do
          render turbo_stream: [
            turbo_stream.prepend("memos", partial: "memos/memo", locals: { memo: @memo }),
            turbo_stream.update("modal", "")
          ]
        end
        format.html { redirect_to @memo, notice: "Memo was successfully created." }
        format.json { render :show, status: :created, location: @memo }
      else
        format.turbo_stream do
          render turbo_stream: turbo_stream.update("modal", partial: "memos/form", locals: { memo: @memo })
        end
        format.html { render :new, status: :unprocessable_entity }
        format.json { render json: @memo.errors, status: :unprocessable_entity }
      end
    end
  end

  def edit
  end

  def update
    respond_to do |format|
      if @memo.update(memo_params)
        format.html { redirect_to @memo, notice: "Memo was successfully updated.", status: :see_other }
        format.json { render :show, status: :ok, location: @memo }
      else
        format.html { render :edit, status: :unprocessable_entity }
        format.json { render json: @memo.errors, status: :unprocessable_entity }
      end
    end
  end

  def destroy
    @memo.destroy!

    respond_to do |format|
      format.html { redirect_to memos_path, notice: "Memo was successfully destroyed.", status: :see_other }
      format.json { head :no_content }
    end
  end

  private
    def set_memo
      @memo = Memo.find(params[:id])
    end

    def memo_params
      params.require(:memo).permit(:title, :content)
    end
end
