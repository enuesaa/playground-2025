class MemosController < ApplicationController
  before_action :set_memo, only: [:show, :edit, :update, :destroy]

  def index
    @memos = Memo.ordered
  end

  def show
  end

  def new
    @memo = Memo.new
  end

  def create
    @memo = Memo.new(memo_params)

    if @memo.save
      respond_to do |format|
        format.html { redirect_to memos_path, notice: "memo was successfully created." }
        format.turbo_stream
      end
    else
      render :new, status: :unprocessable_entity
    end
  end

  def edit
    end

  def update
    if @memo.update(memo_params)
      redirect_to memos_path, notice: "Memo was successfully updated."
    else
      render :edit, status: :unprocessable_entity
    end
  end

  def destroy
    @memo.destroy

    respond_to do |format|
      format.html { redirect_to memos_path, notice: "memo was successfully destroyed." }
      format.turbo_stream
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
