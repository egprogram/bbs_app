require 'sinatra'
require 'kaminari'
require './lib/model'

PER = 5 

get '/bbs' do
  @bbs = BBS.page(1).per(PER).order(created_at: :desc)

  erb :'bbs/index'
end

post '/bbs' do
  req_params = JSON.parse(request.body.read.to_s)
  message = req_params['message']

  bbs = BBS.new(message: message)

  content_type :json
  if bbs.save
    { status: true, bbs_info: bbs.attributes }.to_json
  else
    { status: false }.to_json
  end
end

get '/api/bbs/:page' do
  bbs = BBS.page(params[:page]).per(PER)
  bbs = bbs.order(created_at: :desc)

  content_type :json
  { bbs: bbs }.to_json
end
