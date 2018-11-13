    currentDivIndex=0;
    loaderTextLenght=0;
    timeout=100;
 $(document).ready(function(){

        divElement="<span class='loader_text'></span>";
        loaderText=$("#loader").attr("text");
        loaderTextLenght=loaderText.length;

        var i=0;
        for(i=0;i<loaderText.length;i++)
        {
            $("#loader").append(divElement);
        }
        loaderDivs=$(".loader_text");
        for(i=0;i<loaderText.length;i++)
        {
            loaderDivs.get(i).innerHTML=loaderText[i];
        }

        $(".loader_text").get(0).classList.add("stepup-one");
        currentDivIndex=0;
        setTimeout(animateText(),timeout);

    });

    function animateText()
    {
        currentDivIndex=currentDivIndex%loaderTextLenght;
        $(".loader_text").get(currentDivIndex).classList.add("steup-two");
        if(currentDivIndex+1<loaderTextLenght)
        {
            $(".loader_text").get(currentDivIndex+1).classList.add("steup-one");
        }
        else{
            $(".loader_text").get(0).classList.add("steup-one");
        }

        if(currentDivIndex>=2)
        {
            $(".loader_text").get(currentDivIndex-1).classList.remove("steup-two");
            $(".loader_text").get(currentDivIndex-2).classList.remove("steup-one");
        }
        else if(currentDivIndex==1)
        {
            $(".loader_text").get(0).classList.remove("steup-two");
            $(".loader_text").get(loaderTextLenght-1).classList.remove("steup-one");
        }
        else if(currentDivIndex==0)
        {
            $(".loader_text").get(loaderTextLenght-1).classList.remove("steup-two");
            $(".loader_text").get(loaderTextLenght-2).classList.remove("steup-one");
        }
        setTimeout(animateText,timeout);
        currentDivIndex++;
    }
