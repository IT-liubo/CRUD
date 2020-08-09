/*
Navicat MySQL Data Transfer

Source Server         : lb
Source Server Version : 80012
Source Host           : localhost:3306
Source Database       : crud

Target Server Type    : MYSQL
Target Server Version : 80012
File Encoding         : 65001

Date: 2020-08-09 22:25:42
*/

SET FOREIGN_KEY_CHECKS=0;

-- ----------------------------
-- Table structure for urud
-- ----------------------------
DROP TABLE IF EXISTS `urud`;
CREATE TABLE `urud` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(255) NOT NULL,
  `age` varchar(255) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=13 DEFAULT CHARSET=utf8;

-- ----------------------------
-- Records of urud
-- ----------------------------
INSERT INTO `urud` VALUES ('1', '1', '1');
INSERT INTO `urud` VALUES ('2', '2', '2');
INSERT INTO `urud` VALUES ('3', '3', '3');
