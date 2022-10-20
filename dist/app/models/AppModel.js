"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.AppModel = void 0;

var _knex = _interopRequireDefault(require("../../config/knex"));

var _pluralize = require("../../utils/pluralize");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

class AppModel {
  tableName = '';
  modelDatas = {};
  requireds = [];

  constructor(data) {
    Object.assign(this.modelDatas, data);
  }

  get(property) {
    if (typeof this.modelDatas[property] !== typeof undefined) {
      return this.modelDatas[property];
    }
  }

  set(property, value) {
    this.modelDatas[property] = value;
  }

  fillProps() {
    this.modelDatas.created_at = new Date();
    this.modelDatas.updated_at = new Date();
  }

  async save() {
    this.fillProps();

    for (const requiredProp of this.requireds) {
      if (!this.get(requiredProp)) return;
    }

    await (0, _knex.default)(this.modelClassName).insert(this.modelDatas);
    return true;
  }

  toJson() {
    return this.modelDatas;
  }

  get modelClassName() {
    return (0, _pluralize.pluralize)(this.constructor.name).toLowerCase();
  }

  static get modelClassName() {
    const Sel = this;
    return new Sel().modelClassName;
  }

  static async all() {
    const musicList = await (0, _knex.default)(this.modelClassName).select('*');
    return musicList;
  }

  static async findById(id) {
    const data = await (0, _knex.default)(this.modelClassName).select('*').where({
      id
    }).first();
    return data;
  }

  static async search(queryDatas) {
    const query = (0, _knex.default)(this.modelClassName).select('*');
    Object.keys(queryDatas).map((key, index) => {
      const value = `%${queryDatas[key]}%`;

      if (index === 0) {
        query.where(key, 'like', value);
      } else {
        query.orWhere(key, 'like', value);
      }
    });
    const queryResultList = await query;
    return queryResultList;
  }

}

exports.AppModel = AppModel;