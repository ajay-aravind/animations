    currentDivIndex=0;
    loaderTextLenght=0;
    timeout=150;
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
        animateText();

    });

    function animateText()
    {
        currentDivIndex=currentDivIndex%loaderTextLenght;
        $(".loader_text").get(currentDivIndex).classList.add("takeup");
        if(currentDivIndex-1==-1)
        {
            $(".loader_text").get(loaderTextLenght-1).classList.remove("takeup");
        }
        else{
            $(".loader_text").get(currentDivIndex-1).classList.remove("takeup");
        }
        setTimeout(animateText,timeout);
        currentDivIndex++;
    }
