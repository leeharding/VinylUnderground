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

class Magecoders_Imagecdn_Model_Source_Cachemethods
{
    /**
	 * Gets the list of cache methods for the admin config dropdown
	 *
	 * @return array
	 */
    public function toOptionArray()
    {
        return array(
            /* array('value'=>0, 'label'=>'Disabled'), */
            array('value'=>1, 'label'=>'In database (recommended)'),
            array('value'=>2, 'label'=>'In file system'),
        );
    }
}
