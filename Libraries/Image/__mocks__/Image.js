/**
 * Copyright (c) 2015-present, Facebook, Inc.
 * All rights reserved.
 *
 * This source code is licensed under the BSD-style license found in the
 * LICENSE file in the root directory of this source tree. An additional grant
 * of patent rights can be found in the PATENTS file in the same directory.
 *
 */
'use strict';

const ImageResizeMode = require('ImageResizeMode');
const React = require('React');
const {Component} = React;

class Image extends Component {
  static get resizeMode() {
    return ImageResizeMode;
  }
  render() {
    const {children, ...props} = this.props;
    return React.createElement('Image', props, children);
  }
}

module.exports = Image;
