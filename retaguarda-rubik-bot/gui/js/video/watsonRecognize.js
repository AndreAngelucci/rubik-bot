//carrega as variaveis  de ambiente
require('dotenv').load();

const VisualRecognitionV3 = require('watson-developer-cloud/visual-recognition/v3');

const watsonRecognition = new VisualRecognitionV3({
  url: 'https://gateway.watsonplatform.net/visual-recognition/api',
  version: '2018-03-19',
  iam_apikey: process.env.WATSON_API_KEY
});

module.exports.detectarCor = function(imgPath, classificador, callback, callback_erro){    
    var img = fs.createReadStream(imgPath);
    var classificador = [classificador];
    var porcentagem_minima = 0.6;
    var parametros = {
      images_file: img,
      classifier_ids: classificador,
      threshold: porcentagem_minima
    };
    watsonRecognition.classify(
      parametros, function(err, response){
        if (err){
          callback_erro(err);
        } else {
          callback(response)          
        }
      }
    )
}