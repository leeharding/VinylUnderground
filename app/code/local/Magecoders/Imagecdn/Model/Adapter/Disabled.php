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
 * This class is used when the extension is disabled
 */
class Magecoders_Imagecdn_Model_Adapter_Disabled extends Magecoders_Imagecdn_Model_Adapter_Abstract
{	
    protected function _save($relFilename, $tempfile) {    	
    	return false;
    }
	
    protected function _remove($relFilename) {
    	return false;
    }
    
    protected function _clearCache() {
    	return false;
    }
	
    public function getUrl($filename) {
    	return false;
    }
    
	protected function _onConfigChange() {
		return false;
	}
    
}