<!-- Created by 337547038 on 2018/9/7 0007. -->
# Upload 上传

> 上传要求浏览器ie10+，ie9时使用form+iframe上传，部分属性无效；

> 上传需要服务端支持

### 基础用法
:::demo 
```html
<template>
  <div>
    <div v-for="(item,index) in files">
      <div><img :src="item.base64" width="120" height="90"/></div>
      <p>进度：{{item.loaded}}</p>
      <p>文件名：{{item.name}}</p>
      <p>文件大小：{{item.size}}</p>
      <p>验证结果：{{item.verify}}</p>
      <p>响应状态：{{item.status}}</p>
    </div>
    <ak-upload 
      v-model="files" 
      :action="url" 
      @success="_success" 
      :multiple="true" 
      :maxSize="1024" 
      @error="_error">选择图片</ak-upload>
  </div>
</template>

<script>

export default {
  data () {
    return {
      files: [],
      url: 'http://192.168.0.126:8099/vueTest/upload.php'
    }
  },
  components: {},
  watch: {
    files (v) {
      console.log(v)
      console.log('files is change')
    }
  },
  methods: {
    _success (data, index) {
      // index 表示file中的第几个
      console.log(data)
    },
    _error (data, index) {
      console.log('_error')
      console.log(data)
    }
  }
}
</script>

```
:::

## API
### Upload
|参数|类型|说明|
|-|-|-|
|value          | Array          |v-model值，为一个数组，length为上传文件的个数。包含size、loaded(上传进度)、name、base64(图片)、type、status(上传状态服务器响应状态，并不代表文件上传成功或失败，0上传中，1成功，-1失败)、verify(验证结果)属于。ie10+|
|action         | String         |上传的url地址|
|accept         | String         |h5原生属性，接受上传的文件类型，即打开上传框时默认选择的类型|
|format         | Array          |支持的文件类型，ie10+|
|maxSize        | Number         |文件大小限制，单位 kb，ie10+|
|multiple       | Boolean/false  |支持多图上传，ie10+|
|name           | String         |上传文件字段名，默认为file|
|headers        | Object         |上传请求 header 数据，ie10+|
|data           | Object         |附加请求的参数|
|maxSize        | Number         |文件大小限制，单位 kb，ie10+|


### Upload Event
|参数|类型|说明|
|-|-|-|
|success        | Function       |上传成功回调，参数(Object,index);Object上传返回的response，index为value中的序号|
|error          | Function       |上传失败|
