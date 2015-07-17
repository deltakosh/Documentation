var TypeScript = require('typescript-services');

//FIXME Undefined here :(
//var typeManager = require('../typeManager');


module.exports = {
    getParameterString  : function (astType) {
        var funParameters = astType.parameterList.parameters.members;
        var funSignature = '(';

        for (var index in funParameters) {
            var parameter = funParameters[index];

            funSignature += parameter.identifier.text();
            if (index < funParameters.length - 1) {
                funSignature += ', ';
            }
        }

        funSignature += ')';

        return funSignature;

    },
    getReturnString     : function (astType) {
        var funParameters = astType.parameterList.parameters.members;
        var funSignature = '(';

        for (var index in funParameters) {
            var parameter = funParameters[index];

            funSignature += parameter.identifier.text();
            if (index < funParameters.length - 1) {
                funSignature += ', ';
            }
        }

        funSignature += ')';

        return funSignature;
    },
    getDescriptionString: function (astType, description) {
        var TypeManager = require('../typeManager');
        var parametersDescription = '';
        var funParameters = astType.parameterList.parameters.members;
        var paramRegexp = /(?:\*\s\@param\s+)(\w*)(.*)/gm;

        for (var index in funParameters) {
            var parameter = funParameters[index],
                parameterName = parameter.identifier.text(),
                parameterType = parameter.typeAnnotation.type;
            //optional parameter
            parameter.questionToken ? parametersDescription += 'optional | ' : parametersDescription += ' | ';

            //name of the parameter
            parametersDescription += parameterName + ' | ';

            parametersDescription += TypeManager.getDescriptionString(parameter);

            parametersDescription += ' | ';

            //description of the parameter
            var paramLine = paramRegexp.exec(description);
            //We need to find the line that comments our parameter
            while (paramLine != null) {
                if (paramLine[1] == parameterName) {
                    parametersDescription += paramLine[2];
                }
                paramLine = paramRegexp.exec(description);
            }

            //break line to go to the next parameter
            parametersDescription += '\n';

            //add a second line break if it is the last element of the table
            if (index == funParameters.length - 1) parametersDescription += '\n';

        }

        return parametersDescription;


    }
};