<?php
/**
 * Magecoders_Imagecdn
 *
 * NOTICE OF LICENSE
 *
 * This source file is subject to the Open Software License (OSL 3.0), a
 * copy of which is available through the world-wide-web at this URL:
 * http://opensource.org/licenses/osl-3.0.php
 *
 * @category   Magecoders
 * @package    Magecoders_Imagecdn
 * @author     Magecoders Codemaster <codemaster@magecoders.com>
 * @copyright  Copyright (c) 2009 One Pica, Inc.
 * @license    http://opensource.org/licenses/osl-3.0.php Open Software License (OSL 3.0)
 */

/**
 * Helper methods
 */
class Magecoders_Imagecdn_Helper_Data extends Mage_Core_Helper_Abstract
{	
	/**
	 * Factory method for creating the current CDN adapter. Since the adapter class changes
	 * based on the admin config settings, the class can't be hard coded. 
	 *
	 * @return Magecoders_Imagecdn_Model_Adapter_Abstract
	 */
	public function factory() {
		$adapter = Mage::getStoreConfig('imagecdn/general/status');
		if($adapter) {
			return Mage::getSingleton($adapter);
		} else {
			return Mage::getSingleton('imagecdn/adapter_disabled');
		}		
	}	
	
	public function getProductImage($_product){
	
	
		$adapter = Mage::getStoreConfig('imagecdn/general/status');
		if($adapter){
			$data = $_product->getData();
			echo "<pre>"; print_r($data); exit;
		}
	}
	
}