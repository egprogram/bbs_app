require 'sinatra'
require './lib/model'

get '/bbs' do
  @bbs = BBS.all

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
