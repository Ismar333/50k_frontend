<?php
    $_POST = json_decode(file_get_contents('php://input'), true);

    // print_r($_POST);
    if ($_POST['query'] == "Рубашка") {

        $result = array(
                    array(
                        "text" => "Рубашка",
                        "href" => "https://kg.wildberries.ru/catalog/5315031/otzyvy"
                    ),
                    array(
                        "text" => "Рубашка черная",
                        "href" => "https://kg.wildberries.ru/catalog/8572151/detail.aspx?targetUrl=XS"
                    ),
                    array(
                        "text" => "Рубашка фиолетовая",
                        "href" => "https://kg.wildberries.ru/catalog/8920388/detail.aspx?targetUrl=XS"
                    ) 

                );

            
                
    } else if ($_POST['query'] == "Кофта") {
        $result = array(
                array(
                    "text" => "Кофта",
                    "href" => "https://kg.wildberries.ru/catalog/18681408/detail.aspx?targetUrl=XS"
                ),
                array(
                    "text" => "Кофта черная",
                    "href" => "https://kg.wildberries.ru/catalog/18681411/detail.aspx?targetUrl=XS"
                ),
                array(
                    "text" => "Кофта зеленая",
                    "href" => "https://kg.wildberries.ru/catalog/15073782/detail.aspx?targetUrl=XS"
                )  
        );
    } else {
        $result = "ничего не найдено!";
    }

    echo json_encode($result);

?>