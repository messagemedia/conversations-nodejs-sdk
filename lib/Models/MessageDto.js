/**
 * messagemedia-conversations
 *
 * This file was automatically generated for MessageMedia by APIMATIC v2.0 ( https://apimatic.io )
 */

'use strict';

const BaseModel = require('./BaseModel');

/**
 * Creates an instance of MessageDto
 */
class MessageDto extends BaseModel {
    /**
     * @constructor
     * @param   {Object}  obj    The object passed to constructor
     */
    constructor(obj) {
        super(obj);
        if (obj === undefined || obj === null) return;
        this.channel = this.constructor.getValue(obj.channel);
        this.id = this.constructor.getValue(obj.id);
        this.text = this.constructor.getValue(obj.text);
        this.timestamp = this.constructor.getValue(obj.timestamp);
    }

    /**
     * Function containing information about the fields of this model
     * @return   {array}   Array of objects containing information about the fields
     */
    static mappingInfo() {
        return super.mappingInfo().concat([
            { name: 'channel', realName: 'channel' },
            { name: 'id', realName: 'id' },
            { name: 'text', realName: 'text' },
            {
                name: 'timestamp',
                realName: 'timestamp',
                isDateTime: true,
                dateTimeValue: 'rfc3339',
            },
        ]);
    }

    /**
     * Function containing information about discriminator values
     * mapped with their corresponding model class names
     *
     * @return   {object}  Object containing Key-Value pairs mapping discriminator
     *                     values with their corresponding model classes
     */
    static discriminatorMap() {
        return {};
    }
}

module.exports = MessageDto;
