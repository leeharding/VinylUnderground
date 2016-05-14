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

class Magecoders_Imagecdn_Model_Cachedb extends Mage_Core_Model_Abstract
{
    protected function _construct() {
		parent::_construct();
        $this->_init('imagecdn/cachedb', 'cachedb_id');
    }    
}