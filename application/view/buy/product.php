<h1> Buy <? echo $this->productName; ?></h1>
<p> Hi <? echo $this->buyerName; ?> You are buyig <? echo $this->productName; ?> from <? echo $this->sellerName; ?> </p>
<?

echo 'seller name = ' . $this->sellerName . '<br>';
echo 'Product name =' . $this->productName . '<br>';
echo 'Product price = ' . $this->productPrice . '<br>';
echo 'Postage Cost = ' . $this->productPostge . '<br>';
echo 'Product Description = ' . $this->productDescription . '<br>';
echo $this->productImage;


echo '<p> Please confirm this is the item you wish to purchase by pressing the preceed to payment button</p>';

echo '<a href="/buy/payment/' . $this->productID . '?confirmation=yes"> Continue </a>';
?>