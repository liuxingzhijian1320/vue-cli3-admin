# 设置基础镜像 
FROM nginx:latest

# 将dist文件中的内容复制到 /usr/share/nginx/html/ 这个目录下面
COPY dist/  /usr/share/nginx/html/
# 重写nginx.conf 的配置
COPY default.conf /etc/nginx/conf.d/

#EXPOSE 2222
