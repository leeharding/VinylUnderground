<?php
class Magecoders_Imagecdn_Block_Adminhtml_Product_Gallery_Content extends Mage_Adminhtml_Block_Catalog_Product_Helper_Form_Gallery_Content{
	
	 public function getImagesJson()
    {
	 
        if(is_array($this->getElement()->getValue())) {
            $value = $this->getElement()->getValue();
            if(count($value['images'])>0) {
				
				$aws = Mage::helper('imagecdn')->factory();
			
                foreach ($value['images'] as &$image) {
                    //$image['url'] = Mage::getSingleton('catalog/product_media_config')
                     //                   ->getMediaUrl($image['file']);
					 
					 $image['url'] = $aws->getUrl('/catalog/product'.$image['file']);

                }
                return Mage::helper('core')->jsonEncode($value['images']);
            }
        }
        return '[]';
    }
	
}