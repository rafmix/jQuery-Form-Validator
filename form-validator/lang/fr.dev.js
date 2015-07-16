/**
 * jQuery Form Validator
 * ------------------------------------------
 *
 * French language package
 *
 * @website http://formvalidator.net/
 * @license Dual licensed under the MIT or GPL Version 2 licenses
 * @version 2.2.35
 */
(function($, window) {

  "use strict";

  $(window).bind('validatorsLoaded', function() {

    $.formUtils.LANG = {
      errorTitle: "Le formulaire n'a pas pu être envoyé!",
      requiredFields: "Vous avez pas répondu à toutes les questions",
      badTime: "Vous n'avez pas saisi d'heure correcte",
      badEmail: "Vous n'avez pas saisi d'adresse e-mail valide",
      badTelephone: "Le numéro de téléphone n'est pas valide",
      badSecurityAnswer: "Vous avez saisie une mauvaise réponse à la question de sécurité",
      badDate: "Vous n'avez pas saisie de date correcte",
      lengthBadStart: "Votre réponse doit comporter entre",
      lengthBadEnd: " caractères",
      lengthTooLongStart: "Vous avez entré une réponse qui est plus longue que",
      lengthTooShortStart: "Vous avez entré une réponse qui est plus courte que",
      notConfirmed: "Les valeurs saisies ne peuvent être confirmées",
      badDomain: "Vous avez saisie un domaine incorrect",
      badUrl: "Vous avez pas saisie d'URL correcte",
      badCustomVal: "La valeur est incorrecte",
      andSpaces: " et des espaces",
      badInt: "Vous ne l'avez pas saisie de numéro",
      badSecurityNumber: "Vous avez saisie un mauvais numéro de sécurité sociale",
      badUKVatAnswer: "Vous avez pas saisie un numéro de TVA au Royaume-Uni",
      badStrength: "Vous avez saisie un mot de passe pas suffisamment en sécurisé",
      badNumberOfSelectedOptionsStart: "Vous devez sélectionner au moins",
      badNumberOfSelectedOptionsEnd: " réponse",
      badAlphaNumeric: "Vous ne pouvez saisir que des caractères alphanumeriques (az -09)",
      badAlphaNumericExtra: " et",
      wrongFileSize: "Le fichier que vous essayez de d'envoyer est trop grand (max %s)",
      wrongFileType: "Seuls les fichiers de type %s sont autorisés",
      groupCheckedRangeStart: "Choisissez entre",
      groupCheckedTooFewStart: "Choisissez au minimun",
      groupCheckedTooManyStart: "Choisissez au maximun",
      groupCheckedEnd: " sélection",
      badCreditCard: "Vous avez entré un numéro de carte de crédit invalide",
      badCVV: "Vous avez saisi un CVV incorrecte",
      wrongFileDim: "La taille de l'image n'est pas valide,",
      imageTooTall: "l'image ne peut pas être plus haute que",
      imageTooWide: "l'image ne peut pas être plus large que",
      imageTooSmall: "l'image est trop petite",
      min: "moins",
      max: "max",
      imageRatioNotAccepted : "Le ratio de l'image est pas acceptée"
    };

  });

})(jQuery, window);


